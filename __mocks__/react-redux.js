jest.mock('react-redux', () => {
  return {
    __esModule: true,
    useDispatch: jest.fn(() => () => {}),
    useSelector: jest.fn((selector) => selector({ user: {}, repos: {} })),
  };
});
