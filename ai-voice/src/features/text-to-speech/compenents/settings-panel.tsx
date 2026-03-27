import { Settings, History } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SettingsPanelSettings } from "./settings-panel-settings";
import { SettingsPanelHistory } from "./settings-panel-button";
const tabTriggerClassName = "flex-1 h-full gap-2 bg-transparent rounded-x-0 border-t-0 border-b-px border-b-tranpsarent shadow-none data-[state=active]:border-b-foreground group-data-[variant=default]/tabs-list:data-[state=active]:shadow-none";

export function SettingsPanel() {
    return (
        <div className="hidden w-[420px] min-h-0 flex-col border-l lg:flex">
            
            <Tabs 
                defaultValue="settings"
                className="flex h-full min-h-0 flex-col"
            >

                <TabsList className="w-full bg-transparent rounded-none border-0 h-12 group-data[orientation=horizontal]/tabs:h-12 p-0">
                    <TabsTrigger value="settings">
                        <Settings className="size-4" />
                        Settings
                    </TabsTrigger>

                    <TabsTrigger value="history">
                        <History className="size-4" />
                        History
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="settings">
                    <SettingsPanelSettings />
                </TabsContent>

                <TabsContent value="history">
                    <SettingsPanelHistory />
                </TabsContent>

            </Tabs>

        </div>
    );
}