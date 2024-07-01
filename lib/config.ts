export const config = {
    baseUrl:
        process.env.NODE_ENV === "production"
            ? "https://gardenia-paradise.vercel.app/"
            : "http://localhost:3000",
    siteOgImage: "/assets/img/og.webp",
    siteName: "Gardenia Paradise",
    siteOgAlt: "Gardenia Paradise",
};
