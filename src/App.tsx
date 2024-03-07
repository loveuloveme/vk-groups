import {
    AdaptivityProvider,
    ConfigProvider,
    AppRoot,
    SplitLayout,
    SplitCol,
    View,
    Panel,
    PanelHeader,
    Header,
    Group,
    SimpleCell,
    usePlatform,
} from '@vkontakte/vkui';


import GroupList from './components/GroupList';

function App() {
    const platform = usePlatform();
    
    return (
        <AppRoot>
            <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
                <SplitCol autoSpaced>
                    <View activePanel="groups">
                        <GroupList id="groups" />
                        {/* <Panel id="groups">
                            <PanelHeader>VKUI</PanelHeader>
                            <Group header={<Header mode="secondary">Items</Header>}>
                                <SimpleCell>Hello</SimpleCell>
                                <SimpleCell>World</SimpleCell>
                            </Group>
                        </Panel> */}
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <GroupList />
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

export default App;
