import type { Ajv } from 'ajv'

export function ajvFormatsDraft2019(
	ajv: Ajv | any,
	options?: {
		formats: string[]
	},
)
