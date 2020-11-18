import { mount } from "@vue/test-utils"
import CalculatorButton from "@/components/Calculator/CalculatorButton.vue"

describe("Test CalculatorButton", () => {
  it("Check on pass value with a props it render the same value", () => {
    const wrapper = mount(CalculatorButton, {
      propsData: {
        value: 5
      }
    })

    expect(wrapper.text()).toBe("5")
  })

  it("Check on press button it pass the same value with a props", async () => {
    const wrapper = mount(CalculatorButton, {
      propsData: {
        value: 5
      }
    })

    // Press Button and await
    wrapper.trigger('click');
    await wrapper.vm.$nextTick()

    // Expect Value 
    // Emmitted returned a payload = [[5]]
    expect(wrapper.emitted('update-display')[0][0]).toBe(5)
  })
})