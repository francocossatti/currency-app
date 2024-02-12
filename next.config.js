/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Si usas remotePatterns, no necesitas domains
    // Usamos remotePatterns para permitir cualquier URL de imagen
    // Estos patrones coinciden con cualquier URL que empiece con los dominios especificados
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagdownload.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.freepik.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.shareicon.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.circuloamigosdelafilatelia.org',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'static-00.iconduck.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;