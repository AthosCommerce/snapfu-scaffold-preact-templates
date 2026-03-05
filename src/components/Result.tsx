import { h } from 'preact';
import { Price, Image, OverlayBadge, CalloutBadge } from '@athoscommerce/snap-preact/components';

export const CustomResult = (props: { result: Result; controller: SearchController }) => {
	const { result, controller } = props;
	const core = result.mappings.core;

	return (
		<article className="ss__custom-result">
			<div className="ss__custom-result__image-wrapper">
				<a href={core.url}>
					<OverlayBadge controller={controller as SearchController} result={result}>
						<Image src={core.thumbnailImageUrl} alt={core.name} />
					</OverlayBadge>
				</a>
			</div>
			<div className="ss__custom-result__details">
				<div className="ss__custom-result__details__title">
					<a
						href={core.url}
						dangerouslySetInnerHTML={{
							__html: core.name,
						}}
					/>
				</div>

				<div className="ss__custom-result__details__pricing">
					{core.price < core.msrp ? (
						<>
							<Price value={core.msrp} lineThrough={true} />
							<Price value={core.price} />
						</>
					) : (
						<Price value={core.price} />
					)}
				</div>

				<CalloutBadge result={result}></CalloutBadge>
			</div>
		</article>
	);
};
