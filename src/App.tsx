import {
    AppRoot,
    SplitLayout,
    SplitCol,
    View,
    PanelHeader,
    usePlatform,
} from '@vkontakte/vkui';

import GroupList from './components/GroupList';

function App() {
    const platform = usePlatform();
    
    return (
        <AppRoot>
            <SplitLayout
                header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}
                style={{ justifyContent: 'center' }}
            >
                <SplitCol
                    autoSpaced
                    maxWidth="560px"
                >
                    <View activePanel="groups">
                        <GroupList id="groups" />
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
}

export default App;
