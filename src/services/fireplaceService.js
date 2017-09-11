dataService.$inject = ['$http', 'apiUrl'];

export default function dataService ($http, apiUrl) {
  return {
    get() {
      return $http
        .get(`${apiUrl}/`)
        .then(r => r.data);
    }
  };
}
