import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Location, isPlatformServer } from '@angular/common';
import { getWindow } from 'ssr-window';
import { Request } from "express";
import { REQUEST } from 'express.tokens';

@Injectable({
    providedIn: 'root'
})
export class WindowService {
    private platformId = inject(PLATFORM_ID);
    private request: Request | null = inject(REQUEST, { optional: true });
    private location = inject(Location);

    get nativeWindow(): Window {
        return getWindow();
    }

    private getLocationHostname(): string {
        if (isPlatformServer(this.platformId)) {
            // In the SSR we have to use headers.
            const forwardedHostHeader = this.request?.headers['x-forwarded-host'] as string;
            if (forwardedHostHeader && forwardedHostHeader.length > 0) {
                return forwardedHostHeader;
            }

            const hostHeader = this.request?.headers['host'];
            if (hostHeader && hostHeader.length > 0) {
                return hostHeader;
            }

            console.error('Request have to contain "x-forwarded-host" or "host" header with URL to API. Current headers:');
            console.error(this.request?.headers);

            return window.location.hostname;
        } else {
            // In the browser mode we have to use URL (hostname: eg. 'localhost' or 'vernissage.photos').
            return window.location.hostname;
        }
    }

    private getApplicationFolder(): string {
        return this.location.prepareExternalUrl('');
    }

    getApplicationBaseUrl(): string {
        const host = this.getLocationHostname();

        if (host.startsWith('localhost')) {
            return 'http://localhost:4200';
        }
            
        return 'https://' + host;
    }

    getApplicationUrl(): string {
        const applicationFolder = this.getApplicationFolder();
        const applicationBaseUrl = this.getApplicationBaseUrl();
            
        return applicationBaseUrl + applicationFolder;
    }

    apiService(): string {
        const host = this.getLocationHostname();
        if (host.startsWith('localhost')) {
            return 'localhost:8080';
        }
    
        return host;
    }

    apiUrl(): string {
        const host = this.getLocationHostname();
        if (host.startsWith('localhost')) {
            return 'http://localhost:8080';
        }

        return 'https://' + this.apiService();
    }

    openPage(url: string): void {
        this.nativeWindow.open(url, "_blank");
    }

    redirect(url: string): void {
        this.nativeWindow.location.href = url;
    }

    scrollToTop(): void {
        this.nativeWindow.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
    }
}
