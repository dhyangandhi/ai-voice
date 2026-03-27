import { PageHeader } from "@/components/page-header";
import { TextInputPanel } from "@/features/text-to-speech/compenents/text-input-panel"
import { VoicePreviewPlaceholder } from "@/features/text-to-speech/compenents/voice-perview-placeholder";
import { SettingsPanel } from "@/features/text-to-speech/compenents/settings-panel";
import { TextToSpeechForm } from "@/features/text-to-speech/compenents/text-to-speech-form";


export function TextToSpeechLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <TextToSpeechForm>
            <div className="relative z-50 flex h-full min-h-0 flex-col">
                <PageHeader title="Text to speech" />

                <div className="flex flex-1 min-h-0">

                    {/* LEFT SIDE */}
                    <div className="flex flex-1 flex-col min-h-0">

                        {/* TEXT INPUT */}
                        <div className="flex-1 border-b">
                            <TextInputPanel />
                        </div>

                        {/* PREVIEW */}
                        <div className="flex flex-1 items-center justify-center">
                            <VoicePreviewPlaceholder />
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <SettingsPanel />

                </div>
            </div>
        </TextToSpeechForm>
    );
}