interface CircleStatProps {
    value: number;
    label: string;
  }
  
  export default function CircleStat({ value, label }: CircleStatProps) {
    return (
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center text-2xl font-bold">
          {value}
        </div>
        <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">{label}</span>
      </div>
    );
  }