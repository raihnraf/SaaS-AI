export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
} satisfies PostCSSConfig;

interface PostCSSConfig {
  plugins: Record<string, unknown>;
}
