import { mount } from "@vue/test-utils"
import Home from "@/views/Home"

describe("View Home has been rendered", () => {
  it("Check if a renders the calculator", () => {
    const wrapper = mount(Home);

    expect(wrapper.contains('#calculator')).toBe(true);
  })
})