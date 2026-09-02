import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const allowedIPs = Array.from({ length: 225 }, (_, i) => `192.168.1.${i + 1}`);

const nextConfig = {
  devIndicators: false,

  allowedDevOrigins: allowedIPs,
};

export default withNextIntl(nextConfig);
