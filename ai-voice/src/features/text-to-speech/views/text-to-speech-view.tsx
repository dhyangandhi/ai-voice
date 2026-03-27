import { TextInputPanel } from "@/features/dashboard/components/text-input-panel";
import { VoicePreviewPlaceholder } from "../compenents/voice-perview-placeholder";
import { SettingsPanel } from "../compenents/settings-panel";

export function TextToSpeechView() {
    return (
        <div className="flex min-h-0 flex-1 overflow-hidden">
            <div className="flex min-h-0 flex-1 flex-col">
                <TextInputPanel />
                <VoicePreviewPlaceholder />
            </div>
            <SettingsPanel />
        </div>
    )
}