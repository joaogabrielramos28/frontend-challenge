import { fireEvent, render, screen, waitFor,cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./index";


describe("Card component", () => {
  it("Should show all goal info", async () => {
    render(
      <Card
        country="Brasil"
        flag="https://flagcdn.com/br.svg"
        goal="12/2022"
        id={1}
        local="Rio de Janeiro"
      />
    );

    expect(screen.getByText("Brasil")).toBeInTheDocument();
    expect(screen.getByText("Local: Rio de Janeiro")).toBeInTheDocument();
    expect(screen.getByText("Meta: 12/2022")).toBeInTheDocument();
    expect(screen.getByAltText("Bandeira Brasil")).toBeInTheDocument();
  });

  it("Should show actions buttons in the goal card", async () => {
    render(
      <Card
        country="Brasil"
        flag="https://flagcdn.com/br.svg"
        goal="12/2022"
        id={1}
        local="Rio de Janeiro"
      />
    );

    const deleteBtn = screen.getByTestId("deleteButton");
    const editBtn = screen.getByTestId("editButton");

    expect(deleteBtn).toBeInTheDocument();
    expect(editBtn).toBeInTheDocument();
  });

//   it("Should delete goal card", () => {
//     render(
//       <Card
//         country="Brasil"
//         flag="https://flagcdn.com/br.svg"
//         goal="12/2022"
//         id={1}
//         local="Rio de Janeiro"
//       />
//     );

//     const deleteButton = screen.getByTestId("deleteButton");

//     fireEvent.click(deleteButton);

    
//     expect(screen.queryByText("Brasil")).not.toBeInTheDocument();
    
//   });

  it("should enter in edit mode", () => {
    render(
      <Card
        country="Brasil"
        flag="https://flagcdn.com/br.svg"
        goal="12/2022"
        id={1}
        local="Rio de Janeiro"
      />
    );
    const editBtn = screen.getByTestId("editButton");
    fireEvent.click(editBtn);

    expect(screen.getByTestId("saveButton")).toBeInTheDocument();

    expect(screen.getAllByTestId("input-edit").length).toBe(2);
  });

  //   it("Should can edit goal card", async () => {
  //     render(
  //       <Card
  //         country="Brasil"
  //         flag="https://flagcdn.com/br.svg"
  //         goal="12/2022"
  //         id={1}
  //         local="Rio de Janeiro"
  //       />
  //     );
  //     const editBtn = screen.getByTestId("editButton");
  //     fireEvent.click(editBtn);
  //     const saveBtn = screen.getByTestId("saveButton");
  //     const inputs = screen.getAllByTestId("input-edit");

  //     userEvent.type(inputs[0], "São Paulo");
  //     userEvent.type(inputs[1], "05/2025");

  //     fireEvent.click(saveBtn);
  //     await waitFor(() => {
  //       expect(screen.getByText("Local: São Paulo")).toBeInTheDocument();
  //     });
});
