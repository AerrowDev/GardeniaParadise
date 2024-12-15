export const layoutMetadata = async () => {
    return{
        title: { template: "%s | Gardenia Paradise" , default: "Gardenia Paradise"},
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        locale: 'en',
        type: 'website',

    }
    }
}