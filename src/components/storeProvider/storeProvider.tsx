/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

interface IStoreProps {
    children: React.ReactNode;
    store: any;
}

const StoreProvider = ({
    children,
    store,
}:IStoreProps): React.ReactElement => {
    const persistor = persistStore(store);

    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>

        </Provider>
    )
}

export default StoreProvider;