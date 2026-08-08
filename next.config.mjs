import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  devIndicators: false,
};

export default withNextIntl(nextConfig);
