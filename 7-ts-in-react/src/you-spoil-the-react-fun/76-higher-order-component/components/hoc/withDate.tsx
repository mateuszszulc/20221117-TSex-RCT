/**
* Awaiting Higher Order Component...
* */
export function withDate(WrappedComponent: any) {

    const todayIs = new Date();
    const ComponentWithDate = (props: any) => {

        return <WrappedComponent date={todayIs} {...props} />;
    };

    return ComponentWithDate;
}
