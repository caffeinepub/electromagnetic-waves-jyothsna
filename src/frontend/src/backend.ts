// Auto-generated backend stub
export interface backendInterface {}
export interface CreateActorOptions {
  agentOptions?: Record<string, unknown>;
}
export class ExternalBlob {
  static fromURL(_url: string): ExternalBlob { return new ExternalBlob(); }
  async getBytes(): Promise<Uint8Array> { return new Uint8Array(); }
  onProgress?: (_progress: number) => void;
}
export function createActor(
  _canisterId: string,
  _uploadFile: (_file: ExternalBlob) => Promise<Uint8Array>,
  _downloadFile: (_bytes: Uint8Array) => Promise<ExternalBlob>,
  _options?: CreateActorOptions,
): Promise<backendInterface> {
  return Promise.resolve({});
}
