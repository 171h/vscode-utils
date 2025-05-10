/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// This is a facade for the observable implementation. Only import from here!

export { observableValueOpts } from './api';
export { autorun, autorunDelta, autorunHandleChanges, autorunOpts, autorunWithStore, autorunWithStoreHandleChanges, autorunIterableDelta } from './autorun';
export { asyncTransaction, disposableObservableValue, globalTransaction, observableValue, subtransaction, transaction, TransactionImpl, type IObservable, type IObservableWithChange, type IObserver, type IReader, type ISettable, type ISettableObservable, type ITransaction, } from './base';
export { derived, derivedDisposable, derivedHandleChanges, derivedOpts, derivedWithSetter, derivedWithStore, type IDerivedReader } from './derived';
export { ObservableLazy, ObservableLazyPromise, ObservablePromise, PromiseResult, } from './promise';
export { derivedWithCancellationToken, waitForState } from './utilsCancellation';
export { constObservable, debouncedObservableDeprecated, debouncedObservable, derivedConstOnceDefined, derivedObservableWithCache, derivedObservableWithWritableCache, keepObserved, latestChangedValue, mapObservableArrayCached, observableFromEvent, observableFromEventOpts, observableFromPromise, observableFromValueWithChangeEvent, observableSignal, observableSignalFromEvent, recomputeInitiallyAndOnChange, runOnChange, runOnChangeWithStore, runOnChangeWithCancellationToken, signalFromObservable, ValueWithChangeEventFromObservable, wasEventTriggeredRecently, type IObservableSignal, } from './utils';
export { type DebugOwner } from './debugName';
export { type IChangeContext, type IChangeTracker, recordChanges } from './changeTracker';

import { addLogger, setLogObservableFn } from './logging/logging';
import { ConsoleObservableLogger, logObservableToConsole } from './logging/consoleObservableLogger';
import { DevToolsLogger } from './logging/debugger/devToolsLogger';
import { env } from '../process';

setLogObservableFn(logObservableToConsole);

// Remove "//" in the next line to enable logging
const enableLogging = false
	// || Boolean("true") // done "weirdly" so that a lint warning prevents you from pushing this
	;

if (enableLogging) {
	addLogger(new ConsoleObservableLogger());
}

if (env && env['VSCODE_DEV_DEBUG']) {
	// To debug observables you also need the extension "ms-vscode.debug-value-editor"
	addLogger(DevToolsLogger.getInstance());
}
