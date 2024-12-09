import { test, expect } from "vitest"
import { render } from "@solidjs/testing-library"
import userEvent from "@testing-library/user-event"
import { CounterCTA } from "./CounterCTA"

const user = userEvent.setup()

test("increments value", async () => {
    const { getByRole } = render(() => <CounterCTA />)
    const counter = getByRole('button')
    expect(counter).toHaveTextContent("1")
    await user.click(counter)
    expect(counter).toHaveTextContent("2")
})
