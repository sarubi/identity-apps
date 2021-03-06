/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from "react";
import { Grid } from "semantic-ui-react";
import { ApplicationListParent } from "../components";

/**
 * Overview page.
 *
 * @return {JSX.Element}
 */
export const ApplicationsPage = (): JSX.Element => {
    return (
        <Grid>
            <Grid.Row columns={ 1 }>
                <Grid.Column width={ 16 }>
                    <h1>Applications</h1>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={ 1 }>
                <Grid.Column width={ 16 }>
                    <ApplicationListParent/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};
