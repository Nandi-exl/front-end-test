import { render, screen } from '@testing-library/react';
import App from './App';
import PostSection from './components/PostSection/view';
import userEvent from '@testing-library/user-event';
import axios from 'axios'
import Api from './components/api/api'
import { act } from 'react-dom/test-utils';
// import '@testing-library/jest-dom/extend-expect';

//---------------------------------------------------------------------------------------------------------------------

test('renders learn react link', () => {
  render(<App />);

  const linkElement = screen.getByText(/example/i);

  expect(linkElement);
});

//---------------------------------------------------------------------------------------------------------------------

test('renders another text', () => {
  render(<App />);

  const text2 = screen.getByTestId('text');

  expect(text2);
});

//---------------------------------------------------------------------------------------------------------------------

test('renders placeholder', () => {
  render(<PostSection />);

  const title = screen.getByPlaceholderText('Title');

  expect(title);
});

//---------------------------------------------------------------------------------------------------------------------
test('render user action', () => {
  const testText = 'trial';
  render(<PostSection />);

  const input = screen.getByTestId("input");
  userEvent.type(input, testText);

  const testElement = screen.getByText(testText);
  expect(testElement).toBeInTheDocument();
});

//---------------------------------------------------------------------------------------------------------------------
jest.mock('axios')
const testText = 'joking'
const mockResponse = {
  data : {
    res : testText
  }
}


test('render Api', async () => {
  await act(async () => {
    await axios.get.mockImplementationOnce(() => Promise.resolve(mockResponse))
    render(<Api />)
  })
  const textElement = await screen.getByText(testText)
  expect(textElement).toBeInTheDocument()
})