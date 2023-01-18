module.exports = {
    format_date: (date) => {
      return date.toLocaleDateString().split('T')[0];
    },
  };