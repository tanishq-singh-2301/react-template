import useCount from "@/hooks/count";

interface CounterInterface {
    init: number;
}

const Counter = ({ init }: CounterInterface) => {
    const { count, inc, dec } = useCount({ init });
    return (
        <div>
            <span className="text-base font-semibold text-slate-900">{count}</span>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}

export default Counter;