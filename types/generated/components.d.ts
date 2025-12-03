import type { Schema, Struct } from '@strapi/strapi';

export interface PortfolioExternalVideo extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_external_videos';
  info: {
    displayName: 'External Video';
  };
  attributes: {
    description: Schema.Attribute.Text;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PortfolioImageMedia extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_image_medias';
  info: {
    displayName: 'Image Media';
    icon: 'picture';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface PortfolioPreviewImage extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_preview_images';
  info: {
    displayName: 'Preview Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface PortfolioVideoMedia extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_video_medias';
  info: {
    displayName: 'Video Media';
  };
  attributes: {
    description: Schema.Attribute.Text;
    video: Schema.Attribute.Media<'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'portfolio.external-video': PortfolioExternalVideo;
      'portfolio.image-media': PortfolioImageMedia;
      'portfolio.preview-image': PortfolioPreviewImage;
      'portfolio.video-media': PortfolioVideoMedia;
    }
  }
}
