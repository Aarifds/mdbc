import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  devIndicators: false,
  allowedDevOrigins: ["192.168.1.49"],
};

export default withNextIntl(nextConfig);
