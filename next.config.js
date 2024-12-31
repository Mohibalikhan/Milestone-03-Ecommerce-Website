// next.config.js

module.exports = {
  eslint: {
    // This will disable ESLint during production builds (optional)
    ignoreDuringBuilds: true,

    // Custom ESLint configuration
    rules: {
      // Example: disable the rule that enforces React prop types
      'react/prop-types': 'off',

      // Example: disable the rule that requires no unused variables
      'no-unused-vars': 'off',

      // Example: disable the rule for requiring default export
      'import/no-default-export': 'off',

      // Disable other rules as needed...
    },
  },
};
