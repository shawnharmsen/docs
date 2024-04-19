import nextra from 'nextra';
const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
});

export default withNextra({
    basePath: '/docs',
    async redirects() {
        return [
            {
                source: '/:path*',
                destination: 'https://multibase.co/docs/:path*',
                basePath: false,
                permanent: true,
                has: [
                    {
                        type: 'host',
                        value: 'docs.multibase.co'
                    }
                ]
            }
        ];
    }
});
