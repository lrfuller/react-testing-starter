import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TransactionCreateStepTwo from "./TransactionCreateStepTwo"

// unit test 1
// test('on initial render, the pay button is disabled', async() =>{
//     render(<TransactionCreateStepTwo sender={{id: '4'}} receiver={{id: '21'}}/>)

//     expect(await screen.findByRole('button', {name: /pay/i})).toBeDisabled();
// })

// unit test 2
// test('if an amount and note is entered, the pay button becomes enabled', async() =>{
//     render(<TransactionCreateStepTwo sender={{id: '4'}} receiver={{id: '21'}}/>)

//     userEvent.type(screen.getByPlaceholderText(/Amount/i), "50")
//     userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner")

//     expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled();
// })

// integration test
test('if an amount and note is entered, the pay button becomes enabled', async() =>{
    render(<TransactionCreateStepTwo sender={{id: '4'}} receiver={{id: '21'}}/>)
    expect(await screen.findByRole('button', {name: /pay/i})).toBeDisabled();

    userEvent.type(screen.getByPlaceholderText(/Amount/i), "50")
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner")

    expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled();
})