import { shallowMount } from "@vue/test-utils";
import Buscador from "../Buscador";


const factory = () => {
  return shallowMount(Buscador, {
  });
};

describe("Buscador", () => {
  test("mounts properly", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});