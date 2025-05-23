import { CacheProcessor } from "../processor/cache";
import { CacheRunnerFactory } from "../runner";
import { BasicCaseCreator } from "../test/creator";
import { ECompilerType, type TCompilerOptions } from "../type";

type TTarget = TCompilerOptions<ECompilerType.Rspack>["target"];

const creators: Map<
	TTarget,
	BasicCaseCreator<ECompilerType.Rspack>
> = new Map();

function getCreator(target: TTarget) {
	if (!creators.has(target)) {
		creators.set(
			target,
			new BasicCaseCreator({
				clean: true,
				describe: true,
				target,
				steps: ({ name, src, target, temp }) => [
					new CacheProcessor({
						name,
						sourceDir: src,
						tempDir: temp!,
						target: target as TTarget,
						compilerType: ECompilerType.Rspack,
						configFiles: ["rspack.config.js", "webpack.config.js"]
					})
				],
				runner: CacheRunnerFactory,
				concurrent: true
			})
		);
	}
	return creators.get(target)!;
}

export function createCacheCase(
	name: string,
	src: string,
	dist: string,
	target: TCompilerOptions<ECompilerType.Rspack>["target"],
	temp: string
) {
	const creator = getCreator(target);
	creator.create(name, src, dist, temp);
}
