const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })};

  export {
    formatDate
  }