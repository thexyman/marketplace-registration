import base64 from 'base-64'


class API {

  static init() {
    this.username = "ADD_API_KEY"
  }

  static getCompanyDetails(companyName) {
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + base64.encode(this.username))

    return fetch(`https://api.companieshouse.gov.uk/search/companies?q=${companyName}&items_per_page=2`, {
      method: 'GET',
      headers: headers,
    }).then(resp => {
      if (!resp.ok) throw new Error(resp.status);
      return resp.json()
    })
  }

  static submitDetails(companyInfo) {
    const {username, email, companyName, number, type, status, address} = companyInfo
    return fetch(`http://localhost:3050/users`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username,
        email,
        companyName,
        number,
        type,
        status,
        address,
      })
    }).then(resp => resp.json())
  }
}

API.init()

export default API