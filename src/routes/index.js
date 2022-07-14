import { HeaderOnlyLayout } from "@/components/Layout";
import endpoints from "@/config/endpoints";

//Pages
import Home from "@/pages/Home";
import Following from "@/pages/Following";
import Profile from "@/pages/Profile";
import Upload from "@/pages/Upload";
import Search from "@/pages/Search";

const publicRoutes = [
    { path: endpoints.home, component: Home },
    { path: endpoints.following, component: Following },
    { path: endpoints.profile, component: Profile },
    { path: endpoints.upload, component: Upload, layout: HeaderOnlyLayout },
    { path: endpoints.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
