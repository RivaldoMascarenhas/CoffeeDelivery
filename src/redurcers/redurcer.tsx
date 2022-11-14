import React from "react";
import { Coffee } from "../context/context";

export function coffeeReducer(state: Coffee[], action: any) {
    switch (action.type) {
        case 'Increment':
            return {
                ...state
            }
    }
}

