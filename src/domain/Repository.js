const DATA_URL = '../data/data.json'

class Repository {
  async getAll () {
    try {
      const response = await fetch(DATA_URL)
      return await response.json()
    } catch (error) {
      console.log(error)
    }
  }

  async getCredits () {
    try {
      const response = await this.getAll()
      return response.credits
    } catch (error) {
      console.log(error)
    }
  }

  async getBills () {
    try {
      const response = await this.getAll()
      return response.bills
    } catch (error) {
      console.log(error)
    }
  }

  async getSubscriptions () {
    try {
      const response = await this.getAll()
      return response.subscriptions
    } catch (error) {
      console.log(error)
    }
  }
}

const repo = new Repository()
export default repo
