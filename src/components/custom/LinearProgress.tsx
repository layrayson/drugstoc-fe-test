type Props = {};
export const LinearProgress = ({}: Props) => {
  return (
    <div className="w-full rounded-full h-1 bg-white overflow-hidden">
      <div className="bg-blue-600 h-2.5 w-1/4 rounded-full animate-progress"></div>
    </div>
  );
};
