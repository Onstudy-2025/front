import {Collapse} from "antd";
import type {CSSProperties} from "react";
import type {CollapseProps} from "antd"
import {allModules} from "shared/data.ts";
import {ModuleItem} from "entities/module";
import {ArrowSVG} from "shared/icons";

export const AllModules = () => {
    const panelStyle: CSSProperties = {
        marginBottom: 32,
        border: 'none',
    };

    const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => {
        return allModules.map(module => (
            {
                key: module.id,
                label: module.title,
                children: <ModuleItem module={module} />,
                style: panelStyle,
            }
        ))
    }

    return (
        <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIconPosition='end'
            expandIcon={() => <ArrowSVG />}
            items={getItems(panelStyle)}
        />
    );
};

