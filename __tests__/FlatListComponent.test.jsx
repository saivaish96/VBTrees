import React from "react";
import renderer from "react-test-renderer";
import FlatListComponent from "../components/FlatListComponent";

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe("FlatListComponent", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test("renders successfully", () => {
    const component = renderer.create(<FlatListComponent />);

    expect(component.toJSON()).toBeTruthy();
  });
});