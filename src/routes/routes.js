import { HeaderOnlyLayout } from "@/layouts";
import config from "@/config";

//Pages
import Home from "@/pages/Home";
import Following from "@/pages/Following";
import Profile from "@/pages/Profile";
import Upload from "@/pages/Upload";
import Search from "@/pages/Search";

const publicRoutes = [
    { path: config.endpoints.following, component: Following },
    { path: config.endpoints.home, component: Home },
    { path: config.endpoints.profile, component: Profile },
    { path: config.endpoints.upload, component: Upload, layout: HeaderOnlyLayout },
    { path: config.endpoints.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
