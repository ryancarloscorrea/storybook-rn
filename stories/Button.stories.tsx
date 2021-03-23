// @ts-ignore
import React from 'react';
import { storiesOf } from '@storybook/react';
// @ts-ignore
import * as Button from './bundle.web';

storiesOf('Button', module)
    .add('Base',
        () => <Button />
    )
