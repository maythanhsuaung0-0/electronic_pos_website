interface ChildProp {
  value: string;
}
export function Tag({ value }: ChildProp) {
  return (
    <div className="px-2 py-1 text-xs rounded-sm cursor-pointer bg-gray-300 hover:bg-gray-400">
      {value}
    </div>
  );
}
