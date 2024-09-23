import { h, Fragment } from 'preact';
import { Price, Image, OverlayBadge, CalloutBadge } from '@searchspring/snap-preact/components';

export const CustomResult = (props) => {
	const { result, controller } = props;
	const core = result.mappings.core;
	
	const trackClick = (e) => controller.track.product.click(e, result);

	return (
		<article className="ss__custom-result">
			<div className="ss__custom-result__image-wrapper">
				<a href={core.url} onClick={trackClick}>
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
						onClick={trackClick}
					/>
				</div>

				<div className="ss__custom-result__details__pricing">
					{core.price < core.msrp ? (
						<Fragment>
							<Price value={core.msrp} lineThrough={true} />
							<Price value={core.price} />
						</Fragment>
					) : (
						<Price value={core.price} />
					)}
				</div>

				<CalloutBadge result={result}></CalloutBadge>
			</div>
		</article>
	);
};
