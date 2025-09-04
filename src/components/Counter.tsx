type CounterProps = {
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
}

export default function Counter({ totalNumberOfTodos, numberOfCompletedTodos }: CounterProps) {
  return (
    <p>
      <b>{numberOfCompletedTodos}</b> / {totalNumberOfTodos} todos completed
    </p>
  );
}
