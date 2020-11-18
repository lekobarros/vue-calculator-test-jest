import { mount } from "@vue/test-utils"
import Calculator from "@/components/Calculator"

describe("Integration and Test Calculator", () => {
  // Test Multiplication
  it("Check if operation multiplication is working", () => {
    const wrapper = mount(Calculator);

    // Consts
    const btnFive = '.btn-five';
    const btnMultiplication = '.btn-multiplication';
    const btnTwo = '.btn-two';
    const btnEquals = '.btn-equals';
    const resultsExpected = 10;

    // Press the buttons in sequence 5, *, 2, = 
    wrapper.find(btnFive).trigger('click');
    wrapper.find(btnMultiplication).trigger('click');
    wrapper.find(btnTwo).trigger('click');
    wrapper.find(btnEquals).trigger('click');

    // Get result in data
    const result = wrapper.vm.$data.results;

    // Expected is 10, because 5 * 2 = 10
    expect(result).toBe(resultsExpected)
  })

  // Test Division
  it("Check if operation division is working", () => {
    const wrapper = mount(Calculator);

    // Consts
    const btnFive = '.btn-five';
    const btnDivision = '.btn-division';
    const btnTwo = '.btn-two';
    const btnEquals = '.btn-equals';
    const resultsExpected = 2.5;

    // Press the buttons in sequence 5, /, 2, = 
    wrapper.find(btnFive).trigger('click');
    wrapper.find(btnDivision).trigger('click');
    wrapper.find(btnTwo).trigger('click');
    wrapper.find(btnEquals).trigger('click');

    // Get result in data
    const result = wrapper.vm.$data.results;

    // Expected is 2.5, because 5 / 2 = 2.5
    expect(result).toBe(resultsExpected)
  })

  // Test Plus
  it("Check if operation plus is working", () => {
    const wrapper = mount(Calculator);

    // Consts
    const btnFive = '.btn-five';
    const btnPlus = '.btn-plus';
    const btnTwo = '.btn-two';
    const btnEquals = '.btn-equals';
    const resultsExpected = 7;

    // Press the buttons in sequence 5, +, 2, = 
    wrapper.find(btnFive).trigger('click');
    wrapper.find(btnPlus).trigger('click');
    wrapper.find(btnTwo).trigger('click');
    wrapper.find(btnEquals).trigger('click');

    // Get result in data
    const result = wrapper.vm.$data.results;

    // Expected is 7, because 5 + 2 = 7
    expect(result).toBe(resultsExpected)
  })

  // Test Minium
  it("Check if operation minum is working", () => {
    const wrapper = mount(Calculator);

    // Consts
    const btnFive = '.btn-five';
    const btnMinum = '.btn-minum';
    const btnTwo = '.btn-two';
    const btnEquals = '.btn-equals';
    const resultsExpected = 3;

    // Press the buttons in sequence 5, -, 2, = 
    wrapper.find(btnFive).trigger('click');
    wrapper.find(btnMinum).trigger('click');
    wrapper.find(btnTwo).trigger('click');
    wrapper.find(btnEquals).trigger('click');

    // Get result in data
    const result = wrapper.vm.$data.results;

    // Expected is 3, because 5 - 2 = 3
    expect(result).toBe(resultsExpected)
  })
})