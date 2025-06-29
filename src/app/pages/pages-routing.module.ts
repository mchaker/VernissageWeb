import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConnectionLostPage } from "src/app/pages/errors/connection-lost/connection-lost.page";
import { UnexpectedErrorPage } from "src/app/pages/errors/unexpected-error/unexpected-error.page";
import { ProfilePage } from "src/app/pages/profile/profile.page";
import { UploadPage } from "src/app/pages/upload/upload.page";

import { loggedOutGuard } from "../services/authorization/logged-out-guard.service";
import { authorizationGuard } from "../services/authorization/authorization-guard.service";

import { HomePage } from "./home/home.page";
import { AccessForbiddenPage } from "./errors/access-forbidden/access-forbidden.page";
import { PageNotFoundPage } from "./errors/page-not-found/page-not-found.page";
import { LoginPage } from "./login/login.page";
import { LoginCallbackPage } from "./login-callback/login-callback.page";
import { RegisterPage } from "./register/register.page";
import { ForgotPasswordPage } from "./forgot-password/forgot-password.page";
import { ResetPasswordPage } from "./reset-password/reset-password.page";
import { ConfirmEmailPage } from "./confirm-email/confirm-email.page";
import { AccountPage } from "./account/account.page";
import { SearchPage } from "./search/search.page";
import { StatusPage } from "./status/status.page";
import { NotificationsPage } from "./notifications/notifications.page";
import { InvitationsPage } from "./invitations/invitations.page";
import { SettingsPage } from "./settings/settings.page";
import { TrendingPage } from "./trending/trending.page";
import { EditorsPage } from "./editors/editors.page";
import { CategoriesPage } from "./categories/categories.page";
import { PreferencesPage } from "./preferences/preferences.page";
import { ReportsPage } from "./reports/reports.page";
import { UsersPage } from "./users/users.page";
import { HashtagPage } from "./hashtag/hashtag.page";
import { CategoryPage } from "./category/category.page";
import { SupportPage } from "./support/support.page";
import { TermsPage } from "./terms/terms.page";
import { PrivacyPage } from "./privacy/privacy.page";
import { BookmarksPage } from "./bookmarks/bookmarks.page";
import { FavouritesPage } from "./favourites/favourites.page";
import { ErrorItemsPage } from "./error-items/error-items.page";
import { ArticlesPage } from "./articles/articles.page";
import { NewsPage } from "./news/news.page";
import { EditBusinessCardPage } from "./edit-business-card/edit-business-card.page";
import { SharedCardsPage } from "./shared-cards/shared-cards.page";
import { SharedCardPage } from "./shared-card/shared-card.page";
import { SharedCardPublicPage } from "./shared-card-public/shared-card-public.page";
import { ArticleEditPage } from "./article-edit/article-edit.page";
import { NewsPreviewPage } from "./news-preview/news-preview.page";
import { FrequentlyAskedQuestionsPage } from "./frequently-asked-questions/frequently-asked-questions.page";

const routes: Routes = [
  {
    path: "login",
    component: LoginPage,
    canActivate: [loggedOutGuard],
    title: "Fartgram - Login",
  },
  {
    path: "forgot-password",
    component: ForgotPasswordPage,
    canActivate: [loggedOutGuard],
    title: "Fartgram - Forgot password",
  },
  {
    path: "login-callback",
    component: LoginCallbackPage,
    canActivate: [loggedOutGuard],
  },
  {
    path: "reset-password",
    component: ResetPasswordPage,
    canActivate: [loggedOutGuard],
    title: "Fartgram - Reset password",
  },
  {
    path: "register",
    component: RegisterPage,
    canActivate: [loggedOutGuard],
    title: "Fartgram - Register",
  },
  {
    path: "confirm-email",
    component: ConfirmEmailPage,
    title: "Fartgram - Confirm email",
  },
  {
    path: "account",
    component: AccountPage,
    canActivate: [authorizationGuard],
    title: "Fartgram - Account",
  },
  {
    path: "home",
    component: HomePage,
    data: { reuse: true },
    title: "Fartgram - Home timeline",
  },
  {
    path: "access-forbidden",
    component: AccessForbiddenPage,
    title: "Fartgram - Access forbidden",
  },
  {
    path: "unexpected-error",
    component: UnexpectedErrorPage,
    title: "Fartgram - Unexpected error",
  },
  {
    path: "connection-lost",
    component: ConnectionLostPage,
    title: "Fartgram - Connection lost",
  },
  {
    path: "page-not-found",
    component: PageNotFoundPage,
    title: "Fartgram - Page not found",
  },
  {
    path: "upload",
    component: UploadPage,
    canActivate: [authorizationGuard],
    title: "Fartgram - Upload images",
  },
  {
    path: "search",
    component: SearchPage,
    canActivate: [authorizationGuard],
    title: "Fartgram - Search",
  },
  {
    path: "notifications",
    component: NotificationsPage,
    canActivate: [authorizationGuard],
    title: "Fartgram - Notifications",
  },
  {
    path: "invitations",
    component: InvitationsPage,
    canActivate: [authorizationGuard],
    title: "Fartgram - Invitations",
  },
  {
    path: "settings",
    component: SettingsPage,
    canActivate: [authorizationGuard],
    title: "Fartgram - Settings",
  },
  {
    path: "trending",
    component: TrendingPage,
    data: { reuse: true },
    title: "Fartgram - Trending",
  },
  {
    path: "editors",
    component: EditorsPage,
    data: { reuse: true },
    title: "Fartgram - Editor's choice",
  },
  {
    path: "categories",
    component: CategoriesPage,
    data: { reuse: true },
    title: "Fartgram - Categories",
  },
  {
    path: "preferences",
    component: PreferencesPage,
    canActivate: [authorizationGuard],
    title: "Fartgram - Preferences",
  },
  {
    path: "reports",
    component: ReportsPage,
    canActivate: [authorizationGuard],
    title: "Fartgram - Reports",
  },
  {
    path: "tags/:tag",
    component: HashtagPage,
    data: { reuse: true },
    title: "Fartgram - Tags",
  },
  {
    path: "categories/:category",
    component: CategoryPage,
    data: { reuse: true },
    title: "Fartgram - Categories",
  },
  { path: "support", component: SupportPage, title: "Fartgram - Support" },
  { path: "terms", component: TermsPage, title: "Fartgram - Terms" },
  { path: "privacy", component: PrivacyPage, title: "Fartgram - Privacy" },
  {
    path: "bookmarks",
    component: BookmarksPage,
    data: { reuse: true },
    title: "Fartgram - Bookmarks",
  },
  {
    path: "favourites",
    component: FavouritesPage,
    data: { reuse: true },
    title: "Fartgram - Favourites",
  },
  {
    path: "users",
    component: UsersPage,
    canActivate: [authorizationGuard],
    title: "Fartgram - Users",
  },
  {
    path: "articles",
    component: ArticlesPage,
    canActivate: [authorizationGuard],
    title: "Fartgram - Articles",
  },
  {
    path: "articles/create",
    component: ArticleEditPage,
    canActivate: [authorizationGuard],
    title: "Fartgram - Create article",
  },
  {
    path: "articles/:id",
    component: ArticleEditPage,
    canActivate: [authorizationGuard],
    title: "Fartgram - Edit article",
  },
  { path: "news", component: NewsPage, title: "Fartgram - News" },
  { path: "news/:id", component: NewsPreviewPage, title: "Fartgram - News" },
  {
    path: "faq",
    component: FrequentlyAskedQuestionsPage,
    title: "Fartgram - Frequently Asked Questions",
  },
  {
    path: "business-card/edit",
    component: EditBusinessCardPage,
    canActivate: [authorizationGuard],
    title: "Fartgram - Edit users business card",
  },
  {
    path: "shared-cards",
    component: SharedCardsPage,
    canActivate: [authorizationGuard],
    title: "Fartgram - List of shared business cards",
  },
  {
    path: "shared-cards/:id",
    component: SharedCardPage,
    canActivate: [authorizationGuard],
    title: "Fartgram - Shared business card",
  },
  {
    path: "cards/:code",
    component: SharedCardPublicPage,
    title: "Fartgram - Shared business card",
  },
  {
    path: "error-items",
    component: ErrorItemsPage,
    canActivate: [authorizationGuard],
    title: "Fartgram - Errors",
  },
  {
    path: "actors/:userName",
    component: ProfilePage,
    data: { reuse: true },
    children: [
      { path: "posts", component: ProfilePage },
      { path: "following", component: ProfilePage },
      { path: "followers", component: ProfilePage },
    ],
  },
  {
    path: ":userName",
    component: ProfilePage,
    data: { reuse: true },
    children: [
      { path: "posts", component: ProfilePage },
      { path: "following", component: ProfilePage },
      { path: "followers", component: ProfilePage },
    ],
  },
  { path: ":userName/:id", component: StatusPage },
  { path: "statuses/:id", component: StatusPage },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundPage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      enableViewTransitions: true,
    }),
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
