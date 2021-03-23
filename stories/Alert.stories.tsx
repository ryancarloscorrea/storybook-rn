import { storiesOf } from '@storybook/react';
// @ts-ignore
import React from 'react'

import MyComponent from "../src/components/Alert/Alert";

storiesOf('Alert', module)
    .add('Base',
        () => <MyComponent />
    )
