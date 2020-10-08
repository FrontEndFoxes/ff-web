export default {
  methods: {
    truncate(string, maxLength = 100, end = '...') {
      if (!string) return '';
      string = string.toString();
      return `${string.substring(0, maxLength)}${string.length > maxLength ? end : ''}`;
    },
  },
};
