const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

module.exports = {
    title: "BUKU SAKU PANDUAN HIS KHANZA LITE",
    tagline: "APLIKASI HEBAT, BUKU PANDUAN LENGKAP",
    url: "https://khanza-lite.netlify.app",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "mdestafadilah", // Usually your GitHub org/user name.
    projectName: "khanza-lite-doc", // Usually your repo name.

    plugins: [
        require.resolve("docusaurus-plugin-image-zoom"),
        [
            require.resolve("@cmfcmf/docusaurus-search-local"),
            {
                // `hashed` is recommended as long-term-cache of index file is possible.
                indexDocs: true,
                // Whether to also index the titles of the parent categories in the sidebar of a doc page.
                // 0 disables this feature.
                // 1 indexes the direct parent category in the sidebar of a doc page
                // 2 indexes up to two nested parent categories of a doc page
                // 3...
                //
                // Do _not_ use Infinity, the value must be a JSON-serializable integer.
                indexDocSidebarParentCategories: 0,

                // whether to index blog pages
                indexBlog: false,
            },
        ],
        [
            "docusaurus-plugin-dotenv",
            {
                path: "./.env.local",
                systemvars: false,
            },
        ],
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: "docs",
                    breadcrumbs: true,
                    sidebarPath: require.resolve("./sidebars.js"),
                    sidebarCollapsible: true,
                    // Please change this to your repo.
                    editUrl: ({
                            versionDocsDirPath,
                            docPath
                        }) =>
                        `https://github.com/simrspersahabatan/prima/tree/main/${versionDocsDirPath}/${docPath}`,
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    editCurrentVersion: true,
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig: {
        docs: {
            sidebar: {
                hideable: true,
                autoCollapseCategories: true,
            },
        },
        zoom: {},
        navbar: {
            title: "BUKU SAKU",
            logo: {
                alt: "KHANZA LITE DOCUMENTATION",
                src: "img/logo.svg",
            },
            items: [{
                to: "/blog",
                label: "Blog",
                position: "left"
            }],
        },
        footer: {
            style: "dark",
            links: [{
                    title: "Informasi",
                    items: [{
                            label: "Bismillah",
                            to: "/docs/pengantar",
                        },
                        {
                            label: "Login CMS",
                            href: "https://prima.vercel.app/admin",
                        },
                    ],
                },
                {
                    title: "Official Links",
                    items: [{
                            label: "Khanza Lite",
                            href: "https://mlite.id/",
                        },
                        {
                            label: "Topidesta Blog",
                            href: "https://topidesta.my.id/",
                        },
                    ],
                },
                {
                    title: "Tech - Stack Supports",
                    items: [{
                            label: "Docusaurus",
                            href: "https://github.com/facebook/docusaurus",
                        },
                        {
                            label: "Github",
                            href: "https://github.com/",
                        },
                        {
                            label: "Netlify",
                            href: "https://www.netlify.app/",
                        },
                        {
                            label: "NetlifyCMS",
                            href: "https://www.netlifycms.org/",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Khanza Lite Documentation by mdestafadilah.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
};